'use client'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addTestimonial, deleteTestimonial, updateTestimonial } from '../../store/testimonialSlice';

const Testimonial = () => {
  const testimonials = useSelector((state) => state.testimonials);
  const dispatch = useDispatch();

  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    content: ""
  });

  const [editingTestimonialId, setEditingTestimonialId] = useState(null);

  const handleInputChange = (e) => {
    setNewTestimonial({
      ...newTestimonial,
      [e.target.name]: e.target.value
    });
  };

  const addNewTestimonial = () => {
    if (newTestimonial.name === "" || newTestimonial.content === "") {
      alert("Veuillez remplir tous les champs avant d'ajouter un témoignage.");
      return;
    }

    dispatch(addTestimonial({
      id: testimonials.length + 1,
      ...newTestimonial
    }));

    setNewTestimonial({ name: "", content: "" });
  };

  const deleteTestimonialById = (id) => {
    dispatch(deleteTestimonial(id));
  };

  const editTestimonial = (id) => {
    setEditingTestimonialId(id);
    const testimonial = testimonials.find((t) => t.id === id);
    setNewTestimonial({ name: testimonial.name, content: testimonial.content });
  };

  const updateTestimonialHandler = () => {
    if (newTestimonial.name === "" || newTestimonial.content === "") {
      alert("Veuillez remplir tous les champs avant de mettre à jour le témoignage.");
      return;
    }

    dispatch(updateTestimonial({
      id: editingTestimonialId,
      ...newTestimonial,
    }));

    setEditingTestimonialId(null);
    setNewTestimonial({ name: "", content: "" });
  };
  
  
    return (
      <div>
        <section className="text-center">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-8">
              <h3 className="mt-5"></h3>
              <p className="mb-4 pb-2 mb-md-5 pb-md-0"></p>
            </div>
          </div>
  
          <div className="row justify-content-center" style={{ maxWidth: '550px', margin: '0 auto' }}>
            {testimonials.map((testimonial) => (
              <div className="col-md-6 mb-4" key={testimonial.id}>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-center mb-4">
                      <img
                        src=""
                        className="rounded-circle shadow-1-strong"
                        width="100"
                        height="100"
                        alt={`User ${testimonial.id}`}
                      />
                    </div>
                    <p className="lead my-3 text-muted">
                      {testimonial.content}
                    </p>
                    <p className="font-italic font-weight-normal mb-0">- {testimonial.name}</p>
                    <div className="mt-3">
                      <button className="btn btn-primary mx-1" onClick={() => editTestimonial(testimonial.id)}>Edit</button>
                      <button className="btn btn-danger mx-1" onClick={() => deleteTestimonialById(testimonial.id)}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          <div className="row mt-4 justify-content-center">
            <div className="col-md-6">
              <h4>{editingTestimonialId ? "Edit Testimonial" : "Add Testimonial"}</h4>
              <form>
                <div className="mb-3">
                  <label className="form-label">Nom</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={newTestimonial.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Contenu</label>
                  <textarea
                    className="form-control"
                    name="content"
                    value={newTestimonial.content}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                {editingTestimonialId ? (
                  <button type="button" className="btn btn-primary" onClick={updateTestimonialHandler}>Update</button>
                ) : (
                  <button style={{marginBottom:'50px'}} type="button" className="btn btn-primary" onClick={addNewTestimonial}>Add</button>
                )}
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Testimonial;
  