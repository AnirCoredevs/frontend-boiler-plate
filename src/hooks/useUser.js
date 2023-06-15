import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import req from '../utils/req';
import { useGlobalCtx } from '../context/GlobalContext';

const useUser = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { socket, notifySubscribe, hitToast } = useGlobalCtx();
  const { pathname } = useLocation();

  const register = (data) => {
    setLoading(true);
    return req({
      uri: 'user',
      method: 'POST',
      data,
    });
  };

  const login = ({ email, password, rememberMe }) => {
    try {
      setLoading(true);
      req({ uri: 'user/login', method: 'POST', data: { email, password, rememberMe } })
        .then(({ data }) => {
          setUser(data);
          socket.connect();
          notifySubscribe().then((sub) => req({ method: 'PATCH', uri: 'user/notifysub', data: { sub } }))
            .catch((err) => console.log(err));
          navigate(data.company?.slug || (data.role === 'super-admin' && 'super-admin'));
        })
        .catch((e) => {
          hitToast(e.response.data, 'error');
        })
        .finally(() => setLoading(false));
    } catch (e) {
      console.log(e);
    }
  };

  const logout = async () => {
    setLoading(true);
    let res = false;
    const promise = async () => {
      if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        const swReg = await navigator.serviceWorker.ready;
        const sub = await swReg.pushManager.getSubscription();
        if (sub) res = await sub.unsubscribe();
        return req({ uri: 'user/logout', method: 'POST', data: { ...res && { endpoint: sub.endpoint } } });
      }
      return req({ uri: 'user/logout', method: 'POST' });
    };
    await promise()
      .then(() => {
        setUser(null);
        navigate('/user/login');
        socket.disconnect();
      })
      .catch(() => hitToast('Failed to log out.', 'error'))
      .finally(() => setLoading(false));
  };

  const updateOwn = (data) => req({ method: 'PATCH', uri: 'user/me', data });

  const profile = (id) => req({ uri: `user/profile/${id}` });

  useEffect(() => {
    setLoading(true);
    req({ uri: 'user/me' })
      .then(({ data }) => {
        if (pathname === '/') navigate(data.company?.slug || (data.role === 'super-admin' && 'super-admin'));
        setUser(data);
        socket.connect();
        notifySubscribe().then((sub) => req({ method: 'PATCH', uri: 'user/notifysub', data: { sub } }))
          .catch((err) => console.log(err));
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return {
    user,
    setUser,
    loading,
    setLoading,
    login,
    logout,
    register,
    updateOwn,
    profile,
  };
};

export default useUser;
