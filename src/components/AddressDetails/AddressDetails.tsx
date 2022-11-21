import { Address } from "../../pages/Home";

type Props = {
    address : Address;
}

const AddressDetails = ({ address } : Props) => {
    return (
        <div>
            <h1>{address.cep}</h1>
            <h1>{address.logradouro}</h1>
            <h1>{address.bairro}</h1>
            <h1>{address.localidade}</h1>
            <h1>{address.uf}</h1>
        </div>
    )
}
export default AddressDetails;