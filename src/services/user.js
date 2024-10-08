import { stringify } from 'qs';
import request from '../utils/request';
import func from '../utils/Func';
import { getCaptchaKey } from '../utils/authority';
import { captchaMode } from '../defaultSettings';
import encrypt from '../utils/sm2'

// =====================用户===========================

export async function accountLogin(params) {
  const values = params;
  values.password = encrypt(params.password);
  values.grantType = captchaMode ? 'captcha' : 'password';
  values.scope = 'all';
  return request('/api/blade-auth/token', {
    headers: {
      'Captcha-key': getCaptchaKey(),
      'Captcha-code': values.code,
    },
    method: 'POST',
    body: func.toFormData(params),
  });
}

export async function socialLogin(params) {
  const values = params;
  values.grantType = 'social';
  values.scope = 'all';
  return request('/api/blade-auth/token', {
    method: 'POST',
    body: func.toFormData(values),
  });
}

export async function registerGuest(form, oauthId) {
  const values = form;
  values.oauthId = oauthId;
  return request('/api/blade-system/user/register-guest', {
    method: 'POST',
    body: func.toFormData(values),
  });
}

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  return request('/api/currentUser');
}

export async function list(params) {
  return request(`/api/blade-system/user/list?${stringify(params)}`);
}

export async function grant(params) {
  return request('/api/blade-system/user/grant', {
    method: 'POST',
    body: func.toFormData(params),
  });
}

export async function resetPassword(params) {
  return request('/api/blade-system/user/reset-password', {
    method: 'POST',
    body: func.toFormData(params),
  });
}

export async function remove(params) {
  return request('/api/blade-system/user/remove', {
    method: 'POST',
    body: func.toFormData(params),
  });
}

export async function submit(params) {
  return request('/api/blade-system/user/submit', {
    method: 'POST',
    body: params,
  });
}

export async function update(params) {
  return request('/api/blade-system/user/update', {
    method: 'POST',
    body: params,
  });
}

export async function detail(params) {
  return request(`/api/blade-system/user/detail?${stringify(params)}`);
}

export async function getUserInfo() {
  return request('/api/blade-system/user/info');
}

export async function updatePassword(params) {
  return request('/api/blade-system/user/update-password', {
    method: 'POST',
    body: func.toFormData(params),
  });
}

export async function getCaptchaImage() {
  return request('/api/blade-auth/captcha');
}
