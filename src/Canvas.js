import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add_entity } from './actions';

const Canvas = () => {

    // get canvas related references
    let canvas = null,
        ctx = null,
        BB = null,
        offsetX = null,
        offsetY = null,
        WIDTH = null,
        HEIGHT = null,
        entityCount = 0,
        addedEtityList = [],
        entityList = [],
        dispatch = useDispatch();


    useEffect(() => {
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
        BB = canvas.getBoundingClientRect();
        offsetX = BB.left;
        offsetY = BB.top;
        WIDTH = canvas.width;
        HEIGHT = canvas.height;
        canvas.onmousedown = myDown;
        canvas.onmouseup = myUp;
        clear();
    }, [])

    const toggleEtityForm = (eleId) => {
        let element = document.getElementById(eleId);
        if (!addedEtityList.includes(eleId)) {
            element.classList.toggle("hide");
        } else {
            element.classList.add("hide");
        }
        console.log("entityList", entityList)
    }

    // handle mousedown events
    const myDown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("mouse down")
    }


    // handle mouseup events
    const myUp = (e) => {
        // tell the browser we're handling this mouse event
        e.preventDefault();
        e.stopPropagation();
    }
    const clear = () => {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);

    }

    const drawEntity = (type, name) => {

        ctx.fillStyle = "#FAF7F8";
        ctx.fillStyle = 'transparent';
        let startPoint = 150 * entityCount + 10;
        console.log("data", startPoint)
        rect(startPoint, 40, 100, 23, name);
        if (entityCount > 0) {
            ctx.moveTo(startPoint - 50, 50);
            ctx.lineTo(startPoint, 50);
        }

        ctx.stroke();
        addedEtityList.push(type);
    }

    const rect = (x, y, w, h, name) => {
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.strokeText(name, x + 30, y + 15, w, h);
        ctx.fill();
        ctx.closePath();

    }



    const addEntity = (type, name) => {
        if (!addedEtityList.includes(type)) {
            drawEntity(type, name);
            entityCount++;
        }
    }

    const startDrawingCanvas = (tempUser, e) => {
        dispatch(add_entity(tempUser));
        addEntity(e.target.name, e.target[0].value);
        addedEtityList.push(e.target[0].name);
        toggleEtityForm(e.target[0].name);
    }

    const addEtityData = (e) => {
        e.preventDefault();

        if (e.target.name == 'customer') {
            let tempUser = {
                "entityType": "Customer",
                "customerId": "Customer1",
                'customerName': e.target[0].value,
                'customerEmail': e.target[1].value,
                'customerBankCode': e.target[2].value
            }
            startDrawingCanvas(tempUser, e);

        } else if (e.target.name == 'payment') {
            let tempUser = {
                "entityType": "Payment Mode",
                "paymentModeid": "Payment1",
                'paymentMode': e.target[0].value,
                'issuer': e.target[1].value,
                'last4DigitsAccNo': e.target[2].value,
                'payeeCode': e.target[3].value
            }

           startDrawingCanvas(tempUser, e);

        } else if (e.target.name == 'marchent') {
           let tempUser = {
                "entityType": "Merchant",
                "merchantId": "Merchant1",
                'merchantName': e.target[0].value,
                'merchantCode': e.target[1].value,
                'merchantBankCode': e.target[2].value
            }

            startDrawingCanvas(tempUser, e);

        } else {
            console.log("Invalid choice!")
        }
    }

    return (
        <>
            <section className='canvas-wp'>
                <section className='menu-bar'>
                    <section>
                        <button onClick={(e) => toggleEtityForm('customerName')}>Customer</button>
                        <section className='customerFormWp hide' id="customerName">
                            <form name="customer" onSubmit={(e) => addEtityData(e)}>
                                <input type="text" name="customerName" role="customerName" placeholder='customer Name' title='customer Name' required />
                                <br />
                                <input type="text" name="customerEmail" role="customerEmail" placeholder='customer Email' title='customer Email' required />
                                <br />
                                <input type="text" name="customerBankCode" role="customerBankCode" placeholder='customer Bank Code' title='customer Bank Code' required />
                                <br /><br />
                                <button>Update</button>
                            </form>
                        </section>

                    </section>
                    <section>
                        <button onClick={(e) => toggleEtityForm('merchantName')}>Marchent</button>
                        <section className='customerFormWp hide' id="merchantName">
                            <form name="marchent" onSubmit={(e) => addEtityData(e)}>
                                <input type="text" name="merchantName" role="merchantName" placeholder='merchant Name' title='merchant Name' required />
                                <br />
                                <input type="text" name="merchantName" role="merchantName" placeholder='merchant Code' title='merchant Code' required />
                                <br />
                                <input type="text" name="merchantBankCode" role="merchantBankCode" placeholder='merchant Bank Code' title='merchant Bank Code' required />
                                <br /><br />
                                <button>Update</button>
                            </form>
                        </section>

                    </section>
                    <section>
                        <button onClick={(e) => toggleEtityForm('paymentMode')}>Payment</button>
                        <section className='customerFormWp hide' id="paymentMode">
                            <form name="payment" onSubmit={(e) => addEtityData(e)}>
                                <input type="text" name="paymentMode" role="paymentMode" placeholder='payment Mode' title='payment Mode' required />
                                <br />
                                <input type="text" name="issuer" role="issuer" placeholder='issuer' title='issuer' required />
                                <br />
                                <input type="text" name="last4DigitsAccNo" role="last4DigitsAccNo" placeholder='last4DigitsAccNo' title='last4DigitsAccNo' required />
                                <br />
                                <input type="text" name="payeeCode" role="payeeCode" placeholder='payeeCode' title='payeeCode' required />
                                <br /><br />
                                <button>Update</button>
                            </form>
                        </section>

                    </section>
                   
                </section>
                <section className="canvas-area" id="canvasArea">
                    <canvas id="canvas" width='800' height='500' style={{ border: '1px solid #000000' }}></canvas>
                </section>

            </section>
        </>
    )
}

export default Canvas;