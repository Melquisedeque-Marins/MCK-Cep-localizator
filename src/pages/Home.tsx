import axios from "axios";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import AddressDetails from "../components/AddressDetails/AddressDetails";

export type Address = {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}

type FormData = {
    cep: string;
}

const Home = () => {

    const url = "https://viacep.com.br/ws/01001000/json/"

    const [address, setAddress] = useState<Address>();

    const { register, handleSubmit, formState : { errors} } = useForm<FormData>();

    const [hasError, setHasError] = useState(false);

    const onSubimit = (formData : FormData ) => {
       
        const cep: string  = formData.cep;
       
            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => {
                if (response.data.erro !== true)
                { setAddress(response.data);
                    setHasError(false);
                console.log(response.data);
            }
                else {
                    setHasError(true);
                }
            })
            .catch(error => {
                setHasError(true);
                console.log('ERRO', error);
              });;

    }

    return (
        <div>
           <h1>Endereço do Cep buscado:</h1>
           { hasError &&
        <div className="alert alert-danger">
        CEP não encontrado
      </div>}
           <form onSubmit={handleSubmit(onSubimit)}>
           <div className="mb-4">

                <input {...register("cep", {
                            required: 'Campo obrigatório',
                            pattern: {
                                value: /^[0-9]{5}-[0-9]{3}$/,
                                message: "teste"
                            }
                        })
                    }
                        className={`form-control base-input ${errors.cep ? 'is-invalid' : ''}`}
                        type="text" 
                        placeholder='Digite o cep da localidade desejada' 
                        name='cep'
                />
                </div>
                <div className="button-container">
                    <button className="login-submit" >Buscar</button>
                </div>
            </form>
            {
                address && 
                <AddressDetails address={address}/>
            }
           
        </div>
    )
}
export default Home;


