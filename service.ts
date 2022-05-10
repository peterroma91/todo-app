import axios from 'axios';
export class TodoService {
    getTodoList = async() => {
        try {
            const response = await axios.get('https://gorest.co.in/public/v1/todos');
            return response.data.data;
        } catch (error) {
            throw error;
        }
    }
}

export default new TodoService();