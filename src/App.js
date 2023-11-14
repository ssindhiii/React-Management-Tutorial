import './App.css';
import Customer from './components/Customer';

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
		<div>
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
		</div>
  	);
}

export default App;
