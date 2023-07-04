import React, { useState } from "react";

const App = () => {
        const [data, setData] = useState({
                fname: "",
                lname: "",
                email: "",
                number: "",
        });

        const inputdata = (e) => {
                const name = e.target.name;
                const value = e.target.value;
                // console.log(name, value);

                setData({
                        ...data,
                        [name]: value,
                });
        };

        const submitform = (e) => {
                e.preventDefault();
        };

        return (
                <>
                        <div className="container">
                                <form onSubmit={submitform}>
                                        <h1>
                                                Hello {data.fname} {data.lname}
                                        </h1>
                                        
                                        <h3>{data.email}</h3>
                                        
                                        <h3>{data.number}</h3>
                                        <input
                                                type="text"
                                                name="fname"
                                                placeholder="Enter your name"
                                                onChange={inputdata}
                                        />
                                        <br></br>

                                        <input
                                                type="text"
                                                name="lname"
                                                placeholder="Enter your Last name"
                                                onChange={inputdata}
                                        />
                                        <br></br>

                                        <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                onChange={inputdata}
                                        />
                                        <br></br>

                                        <input
                                                type="tel"
                                                name="number"
                                                placeholder="Enter your mobile number"
                                                onChange={inputdata}
                                        />
                                        <br></br>

                                        <button type="submit">Submit Me</button>
                                </form>
                        </div>
                </>
        );
};

export default App;
