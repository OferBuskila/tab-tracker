import Api from '@/services/Api'

export default {
    register(credentials){
        retrun Api().post('register',credentials)
    }
}

