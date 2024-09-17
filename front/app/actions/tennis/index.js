import { Post } from '@/app/utils/axiosUtil'

export async function getTennis() {
  return await Post('/tennis')
}
