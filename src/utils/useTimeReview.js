import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import InAppReview from 'react-native-in-app-review';

export function useAppReview() {
  const { getItem, setItem } = useAsyncStorage('appReviewed');

  const onReview = async () => {
    if (InAppReview.isAvailable()) {
      InAppReview.RequestInAppReview().then((hasFlowFinishedSuccessfully) => {
        setItem('true');
      });
    }
  };

  return {
    onReview,
  };
}

export function useTimeReview() {
  const { getItem, setItem } = useAsyncStorage('timeReview');
  const appReviewedStore = useAsyncStorage('appReviewed');

  const onTime = async () => {
    const lastDate = await getItem();
    const appReviewed = await appReviewedStore.getItem();
    const lastDateAppOpened = lastDate ? new Date(lastDate) : null;

    if (appReviewed) {
      return false;
    }

    if (lastDateAppOpened !== null) {
      let Today = new Date();

      const diffInMs = Today - lastDateAppOpened;
      const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

      if (diffInDays < 0 || diffInDays > 6) {
        setItem(new Date().toString());
      }

      if (diffInDays >= 1 && diffInDays < 2) {
        return true;
      } else {
        return false;
      }
    } else {
      await setItem(new Date().toString());
    }
  };

  return {
    onTime,
  };
}
