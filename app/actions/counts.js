import { COUNTER_CHANGE } from '../Constants/index';

export function changeCount(count) {
return {
type: COUNTER_CHANGE,
payload: count
}
}