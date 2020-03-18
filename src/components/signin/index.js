import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../firebase';

const SignIn = () => (
    <div>
        <SignInForm />
    </div>
)

const INIT_STATE = {
    email: '',
    password: '',
    error: null
}

class SignInFormBase extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: null
        }
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit = event => {
        const { email, password } = this.state;
        this.props.firebase
          .doSignInWithEmailAndPassword(email, password)
          .then(() => {
             // console.log(res)
            // this.setState({ ...INIT_STATE });
            // this.props.history.push('/');
            this.props.firebase.auth.onAuthStateChanged(authUser => {
                console.log(authUser)
            })
          })
          .catch(error => {
            this.setState({ error });
          });
        event.preventDefault();
    }

    render() {
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === "";
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <button disabled={isInvalid} type="submit">
                    Sign In
                </button>
                {error && <p>{error.message}</p>}
            </form>
        )
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase
)(SignInFormBase)

export default SignIn;

export { SignInForm };