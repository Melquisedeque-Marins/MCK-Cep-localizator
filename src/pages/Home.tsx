import axios from "axios";
import { useEffect, useState } from "react";

type Address = {
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

const Home = () => {

    const url = "https://viacep.com.br/ws/01001000/json/"

    const [address, setAddress] = useState<Address>();

    useEffect(()=>{
        axios.get(url)
            .then((response) => {
                setAddress(response.data);
                console.log(response.data);
            });

    },[]);


    return (
        <div>
           <h1>Endereço do Cep buscado:</h1>
           <h1>{address?.bairro}</h1>
           <label htmlFor="">{address?.localidade}</label>
          
           
        </div>
    )
}
export default Home;