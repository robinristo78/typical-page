import './Login.css';

import Card from '../UI/Card.jsx'
import Button from '../UI/Button.jsx'

const Login = () => {
    return (
        <Card className="login">
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' />
                </div>
                <div>
                    <Button type='submit'>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    )
}

export default Login;