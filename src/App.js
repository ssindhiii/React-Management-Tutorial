import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { WithStyles } from '@material-ui/core/styles';

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit *3,
		overflowX: "auto"
	},
	table: {
		minWidth: 1080
	}
})

const customers = [
	{
		'id': 1,
		'image': 'https://placeimg.com/200/100/1',
		'name': '홍장미',
		'birthday' : '242424',
		'gender' : '여자',
		'job' : '의사'
	},
	{
		'id': 2,
		'image': 'https://placeimg.com/200/100/2',
		'name': '홍장미2323',
		'birthday' : '242424',
		'gender' : '여자',
		'job' : '의사'
	},
	{
		'id': 3,
		'image': 'https://placeimg.com/200/100/3',
		'name': '홍장미11',
		'birthday' : '242424',
		'gender' : '여자',
		'job' : '의사'
	},
]

function App() {
  	return (
		<Paper>
			<Table>
				<TableHead>
					<TableCell>번호</TableCell>
					<TableCell>이미지</TableCell>
					<TableCell>이름</TableCell>
					<TableCell>생년월일</TableCell>
					<TableCell>성별</TableCell>
					<TableCell>직업</TableCell>
				</TableHead>
				<TableBody>
				{
					customers.map(c => {
						return (
							<Customer
								key={c.id}
								id={c.id}
								image={c.image}
								name={c.name}
								birthday={c.birthday}
								gender={c.gender}
								job={c.job}
							></Customer>
						)
					})
				}
				</TableBody>
			</Table>
		</Paper>
  	);
}

export default App;
