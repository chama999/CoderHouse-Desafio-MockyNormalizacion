import dotenv  from "dotenv"

const result= await dotenv.config({ path: './src/.env' })
if (result.error) {
    throw result.error
}
console.log(result.parsed)


//Configuración de la aplicación
export default {
    env: result.parsed,
    fileSystem: {
        pathImg: './public/images/',
        pathviews: './src/views/'
    },
    //Configuración de la base de datos mongodb
    firebase: {
            "type": "service_account",
            "project_id": "ecommerce-8f711",
            "private_key_id": "dd49568265e1ba4e67c9ef453ac5aafddc8ade24",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDA3WqxlMZsFmT3\nv+j38p3PtwiX4GqlskL2reA942TZVakZK1EFpxa3vh2hP1UpIMZn5T06tMYNASG0\nlrCkWWlelySgzn1W9dXxr31CaiVjF5xcTKfvLPZEm133TCF+5escwlCN3b1cAwPO\nM3Y6GxUiZ+KyUFrqvJFTOywXAIv7XAgnz8mFUZWA9llL/ASKsy8DNFpYFrtpOAaG\nczQR34CMfGWClhFFQvc351OffNj+K8yksUpq38swS9fNgC56A/O/p5+4lsZwOBpI\nfKcKuAwj9mqBKwtr/za6LJ4u3bpjCA83MqvRb5ROhyfRqRpyFwO9GARDSJrcvUyz\nr1hdap87AgMBAAECggEAWZumclqm9FpVUBzcz7LsarFmbzZIJrNT1IwF14ta9HWN\nyxFqpB81eWp+Fsi3txOwy13hnHCYYjtn3yFycfHO+LFtxb8a0jgHTrMUFjL+KvOx\n5NqC3if8RfUP7BH1sCGAIw0PY1Kmo+UMtBYJ9MZXg/RTiji2fUDenpasDgXlhAO4\nQE6AJv9fcGVlKlruomagHgOHgwHunionItJHPN40LsiTCFrYVqf0ymvtcpdLO2TV\nSAAmVdc/7cQe8WnZ5pdHkae2jMYSA+JFhwbrTcP9xyFiQ/g+4EbasmzsLg5D0p24\nfLV0wdsz9il2TxXavy2SeP0IkVQ3oc3zmoyATENbiQKBgQDrL9XZa2K0PfcjkOl9\nwkxBbzs0b9oBwugnpy1MxawX4JvuKBPljsFxu08u5kLMy9GMef8NBl61ZX5a0tzh\nOsaxwtzanqTdIiHUEJF30wyFaxDjOg/YcGL6uUndahREUTzMfjla/MxXkQrXYSKB\nZqrzvfbJybr3c3zHoglQ3c378wKBgQDR7sbL1yHYjKaoqES7LLmVunLDutm8YIUr\ntiL1MrBtCgQflvVc1CbrgK7Cpsh9qkMTBDU6WFI9waeyAhnlxzF4I8zD0+b3fAOW\n9L6K8tpwYO/5tz9tgrGToqAnN4BughHbPKaGRx3pHyZ/DcRuYqiPg8f3i4JONwaW\n8ntIiR6JmQKBgQCFIHGzfZbEoiLHzhptJlOV4omn1/yWbKaO85Gv2GDerzR0rdj9\nYz5ay4U57fs4A9Nc6h2WWNm5YncQoDWJhIS+UKhFU/HMfqqZaLt/EUcQKpfHl7Eq\negt9Eu8d1xMbzMRWmMiMmXZtxttVKVWn296+0/PjKz6bHZMvSahuTu9vQwKBgGS8\nh3hZC0y2cWKNHC4VEBjhFyEFEGZsinqnM68lW7N3EvN1pNeele58GWAeWCa1BOqj\nIkeVCiHIQ4gPqg2wv/Q+eYueqz4mrDJLzwMt9dPnMEBLxovuIvgNGXy4DVD56Uei\nmuXkSl4LLJXbLV8qyGfVfKc0spqFnQvh33a3FYhBAoGBALT/F21uULz2b62ZwKXx\nj8qaoB9bEoJkHiiIsAXKb6TXh31rmCUzwZZcFGaWTx3pqSTlMCyL6s8kPjRmwidx\nJ6H693bCxAU19EewiuMKGwZydEyKcr8nkdRbp6PFPSdQQ9Mf0ZsunDgPPbtHhUaG\n+02pCK+tM6LA+KhYUt0XwPSa\n-----END PRIVATE KEY-----\n",
            "client_email": "firebase-adminsdk-x52bb@ecommerce-8f711.iam.gserviceaccount.com",
            "client_id": "108560185057345380235",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-x52bb%40ecommerce-8f711.iam.gserviceaccount.com"
    },
    mongodb:{
        cnxStr: 'mongodb://localhost:27017/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        }
    }
}


