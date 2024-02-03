import { postLogout } from '@api/auth';
import { useAuthCtx } from '@store/AuthContext';
import { AuthActionType } from '@type/auth';
import { useNavigate } from 'react-router-dom';

interface HeaderProfileProps {
  isExpanded: boolean;
}

export default function HeaderProfile({ isExpanded }: HeaderProfileProps) {
  const { authState, authDispatch } = useAuthCtx();
  const navigate = useNavigate();

  if (!authState.isAuthenticated) {
    return null;
  }

  const handleLogout = async () => {
    const res = await postLogout();
    if (res) {
      alert('로그아웃 성공!');
      authDispatch({
        type: AuthActionType.LOGOUT,
      });
      navigate('/');
    } else {
      alert('로그아웃 실패!');
    }
  };

  return (
    <div
      className={[
        'absolute  top-14  shadow-lg',
        'transition-all overflow-hidden duration-300',
        isExpanded ? 'max-h-[100px]' : 'max-h-0',
      ].join(' ')}
    >
      <div className="flex flex-col w-[240px] px-4 py-2 bg-white rounded-lg gap-y-4 ">
        <label>E-mail: {authState.authInfo!.email}</label>
        <button className="ml-auto text-red-500" onClick={handleLogout}>
          로그아웃
        </button>
      </div>
    </div>
  );
}
