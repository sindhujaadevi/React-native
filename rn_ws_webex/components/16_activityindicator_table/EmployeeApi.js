import axios from 'axios';

export default class EmployeeApi {
	static getAllEmployees(cb) {
		console.log("getAllEmployees");
		axios.get('http://192.168.1.7:3001/employees')
			.then(response => cb(response.data))
			.catch(error => {throw error});
	}
}
