import arrow from './arrow.png';
import './App.css';
import React,{useState} from 'react';

function App() {
    const [formLabel, setFormLabel] = useState([]);
    const [list, setList] = useState([]);
    const [customerName, setCustomerName] = useState('dheerendra');
    const [customerEmail, setCustomerEmail] = useState('singhdheerendra34@gmail.co');
    const [customerBankCode, setCustomerBankCode] = useState('GHHFG45655BGG65');
    const [modalType, setModalType] = useState('customer');
    const [payeeCode, setPayeeCode] = useState('MAC');

    const labelList = {
        'customer':['Customer Name','customer Email','customer BankCode'],
        'paymentMode':['Payment Mode','issuer','last4Digits AccNo', 'Payee Code'],
        'merchant':['Merchant Name','Merchant Code','Merchant BankCode'],
        'paymentServiceProviders':['PSP Name','PSP Email','PSP City Code'],
        'networkProvider':['Network Provider Name','Network Provider Email','Network Provider BankCode'],
        'issuer':['Issuer Name','Issuer Email','Issuer BankCode'],
        'acquirer':['Acquirer Name','Acquirer Email','Acquirer BankCode'],
        'banks':['Banks Name','Banks Email','Banks Code'],
    };
    const dropdownList = [
        {'label':'Customer', 'value':'customer'},
        {'label':'Payment Mode', 'value':'paymentMode'},
        {'label':'Merchant', 'value':'merchant'},
        {'label':'Payment Service Providers', 'value':'paymentServiceProviders'},
        {'label':'Network Provider', 'value':'networkProvider'},
        {'label':'Issuer', 'value':'issuer'},
        {'label':'Acquirer', 'value':'acquirer'},
        {'label':'Financial Institution/Banks', 'value':'institution'},

    ]

    const addList = (event) => {
        let tempList = {};
       if(modalType == 'paymentMode') {
            tempList = {
                "entityType": modalType,
                "paymentModeid": "payment"+list.length+1,
                'paymentMode': customerName,
                "issuer": customerEmail,
                "last4DigitsAccNo": customerBankCode,
                "payeeCode":payeeCode
            }
        } else{
            let id = modalType + "Id",
            code = (modalType == 'merchant')? 'merchantCode': modalType +'Email',
            name = modalType + "Name",
            bankCode = modalType+"BankCode";


            tempList["entityType"] = modalType;
            tempList[id] = modalType +list.length+1;
            tempList[name] = customerName;
            tempList[code] = customerEmail;
            tempList[bankCode] = customerBankCode;
        }
       if(list)
            setList(list.concat(tempList));
       else
            setList(tempList);
    }

    const downloadModal = (event) =>{
        console.log("event: ",event.target);
        let el = event.target;
        let data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({"transactionWorkflow":[...list]}));
       el.setAttribute("href", "data:"+data);
       el.setAttribute("download", "data.json");
    }
  return (
    <div className="App">
        <header>
            <section>
                <section>
                        <p>
                            <label>Entity Type: </label>
                            <select onChange={(e)=>setModalType(e.target.value)}>
                                {dropdownList && dropdownList.map((list, idx)=><option key={idx} value={list.value}>{list.label}</option>)}
                            </select>
                        </p>
                        <p>
                            <label>{labelList[modalType][0]}: </label>
                            <input type="text" value={customerName} onChange={(e)=>setCustomerName(e.currentTarget.value)} />
                        </p>
                        <p>
                             <label>{labelList[modalType][1]}: </label>
                            <input type="text" value={customerEmail} onChange={(e)=>setCustomerEmail(e.currentTarget.value)} />
                        </p>
                        <p>
                             <label>{labelList[modalType][2]}: </label>
                            <input type="text" value={customerBankCode} onChange={(e)=>setCustomerBankCode(e.currentTarget.value)} />
                        </p>
                        { modalType == 'paymentMode' && <p>
                             <label>{labelList[modalType][3]}: </label>
                            <input type="text" value={payeeCode} onChange={(e)=>setPayeeCode(e.currentTarget.value)} />
                        </p>}
                </section>
                 <button onClick={(e)=>{addList(e)}}>Create</button>

            </section>
        </header>
    <main>
        <hr/>

            <section>
                {list.map((list, idx)=> <p key={idx} className='box-wp'>
                    <label className='modal-box' key={idx}> {list[(list.entityType == 'paymentMode') ? list.entityType : list.entityType + "Name"]} </label>
                    <img className='arrow' src={arrow}/>
                </p>
                )}
            </section>
        <hr/>
    </main>
        <footer>
            {list.length > 0 && <a href="#" onClick={(e)=>downloadModal(e)}>Download Modal</a>}
        </footer>
    </div>
  );
}

export default App;
