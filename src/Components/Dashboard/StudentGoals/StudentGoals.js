import { useState } from 'react';
import { toast } from 'react-toastify';
import SideNav from '../SideNav/SideNav';
import './StudentGoals.css';



const StudentGoals = () => {
    const [goalData, setGoalData] = useState({});
    const [file, setFile] = useState(null);
    const [goalTypes, setGoalTypes] = useState([])
    const types = [];

    const handleBlur = e => {

        goalData[e.target.name] = e.target.value;
        setGoalData(goalData);
    }
    const handleGoalType = e => {
        const goalTypeObj = {};
        goalTypeObj[e.target.name] = e.target.value;
        types.push(goalTypeObj);
        setGoalTypes([...goalTypes, ...types]);

    }
    const handleChange = e => {
        setFile(e.target.files[0]);
    }
    const handleSubmit = e => {
        e.preventDefault();


        const formData = new FormData();
        const goalTypeObj = {};
        goalTypeObj.types = goalTypes;

        formData.append('file', file);
        formData.append('goalName', goalData.goalName);
        formData.append('description', goalData.description);
        formData.append('goalType', JSON.stringify(goalTypeObj.types));

        fetch('http://localhost:5000/studentGoal', {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                if (data.result.insertedId) {
                    toast.success('Student goal Data send', {
                        theme: 'dark',
                    }
                    )
                }
            });


        e.target.reset();
    }


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-1">
                    <SideNav></SideNav>
                </div>
                <div className="col-md-11 col-sm-12 col-12 bg-secondary-subtle">
                    <p className="fs-5 text-center mt-2">Add students goals</p>
                    <form onSubmit={handleSubmit} className="row g-3 d-flex justify-content-center">
                        <div className="col-md-10">
                            <label htmlFor="inputEmail4" className="form-label">Goals Name</label>
                            <input required onBlur={handleBlur} name="goalName" type="text" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-10">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                            <textarea onBlur={handleBlur} name="description" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

                        </div>
                        <div className="col-md-5">
                            <label htmlFor="" className="form-label">Goal Type 1</label>
                            <input onBlur={handleGoalType} type="text" name="goalType" className="form-control" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="" className="form-label">Goal Type 2</label>
                            <input onBlur={handleGoalType} type="text" name="goalType" className="form-control" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="" className="form-label">Goal Type 3</label>
                            <input onBlur={handleGoalType} type="text" name="goalType" className="form-control" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="" className="form-label">Goal Type 4</label>
                            <input onBlur={handleGoalType} type="text" name="goalType" className="form-control" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="" className="form-label">Goal Type 5</label>
                            <input onBlur={handleGoalType} type="text" name="goalType" className="form-control" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="formFile" className="form-label">Select an Icon</label>
                            <input required onChange={handleChange} className="form-control" type="file" name="file" id="formFile" />
                        </div>

                        <div className="col-10">
                            <button type="submit" className="btn btn-primary mb-5">
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default StudentGoals;