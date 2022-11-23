import { Address } from "../../pages/Home";

import './AddressDetails.css';

type Props = {
    address: Address;
}

const AddressDetails = ({ address }: Props) => {
    return (
        <div className="Address-card-container">
            <div className="Address-card-content">
                <div className="Address-field">
                    <span>CEP:</span><h1>{address.cep}</h1>
                </div>
                <div className="Address-field">
                    <span>LOGRADOURO:</span><h1>{address.logradouro}</h1>
                </div>
                <div className="Address-field">
                    <span>BAIRRO:</span><h1>{address.bairro}</h1>
                </div>
                <div className="Address-field">
                    <span>CIDADE:</span><h1>{address.localidade}</h1>
                </div>
                <div className="Address-field">
                    <span>ESTADO:</span><h1>{address.uf}</h1>
                </div>



            </div>
        </div>
    )
}
export default AddressDetails;