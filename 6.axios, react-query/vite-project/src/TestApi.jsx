import { useMutation } from 'react-query';
import axios from 'axios';

//방법1. axios
export const postTestAxios = (payload) => {
    return axios.post('/wowow/test123', payload)
    .then((res) => {
        return res;
    })
    .catch((err) => {
        return err;
    });
};

//방법2. mutation + axios
export const TestApi = () => {
    const postTestMutation = useMutation(
        async (payload) => {
            const response = await axios.post('/wowow/test123', payload);
            return response; // 반환된 값이 onSuccess의 data로 전달됨
        },
        {
            onSuccess: (data) => {
                console.log('Success:', data);
        },
            onError: (error) => {
                console.error('Error:', error);
        },
            onSettled: () => {
                console.log('Request has settled');
            }
        }
    );
    return {postTestMutation};
}