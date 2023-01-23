
import Card from '../../components/Card/Card'
import styles from './login_page.module.css'


function LoginPage(props){
    return(
        <div className={styles.login_page}>
            <Card props={props}/>
        </div>
    )
}


export default LoginPage