import React from 'react';
import { toast } from 'react-toastify';
import SideNav from '../SideNav/SideNav';

const UpdateCompleteLesson = () => {

    const handleSubmit = e => {
        e.preventDefault();

        const className = e.target.className.value;
        const subject = e.target.subject.value;
        const teacherName = e.target.teacherName.value;
        const totalLesson = e.target.totalLesson.value;
        const lessonCompleted = e.target.completedLesson.value;
        const lessonCompleteDate = e.target.lessonCompleteDate.value;
        const description = e.target.description.value;

        const completedLesson = {
            className,
            subject,
            teacherName,
            totalLesson,
            lessonCompleted,
            lessonCompleteDate,
            description
        }

        fetch('http://localhost:5000/updateCompleteLesson', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(completedLesson),
        })
            .then(res => res.json())
            .then(data => {
                if (data.result.insertedId) {
                    toast.success("Completed lesson data send successfully", {
                        theme: "dark"
                    })
                }
            })

        e.target.reset();
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-1'>
                    <SideNav></SideNav>
                </div>
                <div className='col-md-11 col-sm-12 col-12 bg-secondary-subtle'>
                    <h3 className=' text-center mt-5 mb-3'>Update Complete Lesson</h3>

                    <form onSubmit={handleSubmit}>
                        <div className='row g-2 justify-content-center'>
                            <div className='mb-3 col-md-5'>
                                <label for='validationCustom04' className='form-label'>Select Class</label>
                                <select name='className' className='form-select' id='validationCustom04' required>
                                    <option selected disabled>Select Class</option>
                                    <option value='Class-i'>Class-i</option>
                                    <option value='Class-ii'>Class-ii</option>
                                    <option value='Class-iii'>Class-iii</option>
                                    <option value='Class-iv'>Class-iv</option>
                                    <option value='Class-v'>Class-v</option>
                                    <option value='Class-vi'>Class-vi</option>
                                    <option value='Class-vii'>Class-vii</option>
                                    <option value='Class-viii'>Class-viii</option>
                                    <option value='Class-ix'>Class-ix</option>
                                    <option value='1Class-x'>Class-x</option>
                                </select>
                            </div>
                            <div className='mb-3 col-md-5'>
                                <label for='exampleFormControlInput1' className='form-label'>
                                    Subject Name
                                </label>
                                <input required name='subject' type='text' className='form-control' id='exampleFormControlInput1' placeholder='Enter Subject Name' />
                            </div>
                        </div>
                        <div className='row g-2 justify-content-center'>
                            <div className='mb-3 col-md-5'>
                                <label for='exampleFormControlInput1' className='form-label'>
                                    Teacher Name
                                </label>
                                <input required name='teacherName' type='text' className='form-control' id='exampleFormControlInput1' placeholder='Enter Teacher Name' />
                            </div>
                            <div className='mb-3 col-md-5'>
                                <label for='exampleFormControlInput1' className='form-label'>
                                    A subject Total lesson
                                </label>
                                <select name='totalLesson' className='form-select' id='validationCustom04' required>
                                    <option selected disabled>Select Lesson</option>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                    <option value='6'>6</option>
                                    <option value='7'>7</option>
                                    <option value='8'>8</option>
                                    <option value='9'>9</option>
                                    <option value='10'>10</option>
                                    <option value='11'>11</option>
                                    <option value='12'>12</option>
                                    <option value='13'>13</option>
                                    <option value='14'>14</option>
                                    <option value='15'>15</option>
                                    <option value='16'>16</option>
                                    <option value='17'>17</option>
                                    <option value='18'>18</option>
                                    <option value='19'>19</option>
                                    <option value='20'>20</option>
                                    <option value='21'>21</option>
                                    <option value='22'>22</option>
                                    <option value='23'>23</option>
                                    <option value='24'>24</option>
                                    <option value='25'>25</option>
                                    <option value='26'>26</option>
                                    <option value='27'>27</option>
                                    <option value='28'>28</option>
                                    <option value='29'>29</option>
                                    <option value='30'>30</option>
                                    <option value='31'>31</option>
                                    <option value='32'>32</option>
                                    <option value='33'>33</option>
                                    <option value='34'>34</option>
                                    <option value='35'>35</option>
                                    <option value='36'>36</option>
                                    <option value='37'>37</option>
                                    <option value='38'>38</option>
                                    <option value='39'>39</option>
                                    <option value='40'>40</option>
                                    <option value='41'>41</option>
                                    <option value='42'>42</option>
                                    <option value='43'>43</option>
                                    <option value='44'>44</option>
                                    <option value='45'>45</option>
                                    <option value='46'>46</option>
                                    <option value='47'>47</option>
                                    <option value='48'>48</option>
                                    <option value='49'>49</option>
                                    <option value='50'>50</option>
                                    <option value='51'>51</option>
                                    <option value='52'>52</option>
                                    <option value='53'>53</option>
                                    <option value='54'>54</option>
                                    <option value='55'>55</option>
                                    <option value='56'>56</option>
                                    <option value='57'>57</option>
                                    <option value='58'>58</option>
                                    <option value='59'>59</option>
                                    <option value='60'>60</option>
                                    <option value='61'>61</option>
                                    <option value='62'>62</option>
                                    <option value='63'>63</option>
                                    <option value='64'>64</option>
                                    <option value='65'>65</option>
                                    <option value='66'>66</option>
                                    <option value='67'>67</option>
                                    <option value='68'>68</option>
                                    <option value='69'>69</option>
                                    <option value='70'>70</option>
                                    <option value='71'>71</option>
                                    <option value='72'>72</option>
                                    <option value='73'>73</option>
                                    <option value='74'>74</option>
                                    <option value='75'>75</option>
                                    <option value='76'>76</option>
                                    <option value='77'>77</option>
                                    <option value='78'>78</option>
                                    <option value='79'>79</option>
                                    <option value='80'>80</option>
                                    <option value='81'>81</option>
                                    <option value='82'>82</option>
                                    <option value='83'>83</option>
                                    <option value='84'>84</option>
                                    <option value='85'>85</option>
                                    <option value='86'>86</option>
                                    <option value='87'>87</option>
                                    <option value='88'>88</option>
                                    <option value='89'>89</option>
                                    <option value='90'>90</option>
                                    <option value='91'>91</option>
                                    <option value='92'>92</option>
                                    <option value='93'>93</option>
                                    <option value='94'>94</option>
                                    <option value='95'>95</option>
                                    <option value='96'>96</option>
                                    <option value='97'>97</option>
                                    <option value='98'>98</option>
                                    <option value='99'>99</option>
                                    <option value='100'>100</option>
                                </select>
                            </div>
                        </div>
                        <div className='row g-2 justify-content-center'>
                            <div className='mb-3 col-md-5'>
                                <label for='exampleFormControlInput1' className='form-label'>
                                    Which lesson is completed
                                </label>
                                <input required name='completedLesson' type='text' className='form-control' id='exampleFormControlInput1' placeholder='Which lesson is completed?' />
                            </div>
                            <div className='mb-3 col-md-5'>
                                <label for='exampleFormControlInput1' className='form-label'>
                                    Lesson Complete Date
                                </label>
                                <input required name='lessonCompleteDate' type='date' className='form-control' id='exampleFormControlInput1' />
                            </div>
                        </div>
                        <div className='row g-2 justify-content-center'>
                            <div className='mb-3 col-md-10'>
                                <label for='exampleFormControlTextarea1' className='form-label'>Description</label>
                                <textarea name='description' className='form-control' id='exampleFormControlTextarea1' rows='3'></textarea>
                            </div>
                            <div className='mb-3 col-md-10'>
                                <input className='mt-3 btn btn-success' type='submit' value='submit' />
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default UpdateCompleteLesson;