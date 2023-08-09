import { UsStyle } from "./style"

function Findus({hour, address}) {

    return (
        <UsStyle>

            <div>
                <iframe></iframe>
                <h3>Horário de funcionamento</h3>
                <ul>
                    <li>Segunda : {hour}</li>
                    <li>Terça : {hour}</li>
                    <li>Quarta : {hour}</li>
                    <li>Quinta :{hour}</li>
                    <li>Sexta : {hour}</li>  
                </ul>
            </div>
            <address>
                {address}
            </address>

        </UsStyle>
    )

}

export default Findus 