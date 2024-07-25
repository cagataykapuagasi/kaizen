import { IPromotion, IPromotionDetail, ITag } from 'src/types/api';
import { request } from './Client';

export function getTags() {
  return request<ITag[]>('get', 'https://api.extrazone.com/tags/list');
}

export function getPromotions(params: any) {
  return request<IPromotion[]>(
    'get',
    'https://api.extrazone.com/promotions/list?Channel=PWA',
    params
  );
}

export function getPromotionDetail(params: any) {
  return request<IPromotionDetail>('get', 'https://api.extrazone.com/promotions', params);
}
