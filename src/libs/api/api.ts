import { AxiosPromise } from 'axios';
import { FeedbackType } from '../../components/WidgetForm';
import { xhr } from './index';

interface ICreateFeedback {
  type: FeedbackType,
  comment: string;
  screenshot: string | null,
}

const createFeedback = (params: ICreateFeedback): AxiosPromise<void> => (
  xhr.post('/feedbacks', params)
);

export default {
  createFeedback,
};
