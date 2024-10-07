import { Get, Post } from '@/app/utils/axiosUtil';

export async function getList() {
  return await Post('/tennis');
}

export async function getDetail({ id }) {
  return await Get(`/tennis/${id}`);
}
