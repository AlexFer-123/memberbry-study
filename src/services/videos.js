import { upload_api } from './config'

export default {

    listar: () => {
        return upload_api.get('videos')
    }

}