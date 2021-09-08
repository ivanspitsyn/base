import React, { useState } from 'react';
import './kon.css';
import Input from '../../utils/input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/user';
import Registration from '../authorization/Registration';
import { registration } from '../../actions/user';
import { NavLink } from 'react-router-dom';
import FetchRandomUser from '../FetchRandomUser';

const Kon = () => {
  const isId = useSelector((state) => state.user.currentUser);
  console.log(isId.role);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  let a = 'konst';

  switch (isId.role) {
    case 'kon':
      return (
        <div className='authorization'>
          <div className='authorization__header'>Регистрация</div>
          <Input
            value={email}
            setValue={setEmail}
            type='text'
            placeholder='Введите email...'
          />
          <Input
            value={password}
            setValue={setPassword}
            type='password'
            placeholder='Введите пароль...'
          />
          <button
            className='authorization__btn'
            onClick={() => registration(email, password)}
          >
            Зарегистрироваться
          </button>
          <div className='navbar__login'>
            <NavLink to='/main'>Войти</NavLink>
          </div>
        </div>
      );
    case 'director':
      return (
        <div className='authorization'>
          <h1>Директор</h1>
        </div>
      );
    case 'manager':
      return (
        <div className='manager'>
          <h1>Manager</h1>
          <FetchRandomUser />
          <FetchRandomUser />
        </div>
      );
    case 'client':
      return (
        <div className='authorization'>
          <h1>Клиент</h1>
        </div>
      );
    case '123':
      alert('Перебор');
      break;
    default:
      return (
        <div className='authorization'>
          <h1>Роль не определена</h1>
        </div>
      );
  }

  // return (
  //     <div className='authorization'>
  //       <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
  //     </div>
  // );
};

export default Kon;
