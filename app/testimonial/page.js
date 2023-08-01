'use client'
import { useState } from "react";

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([
      {
        id: 1,
        name: "Ange Olivier",
        content: "J'ai eu la chance de collaborer avec Tony sur plusieurs projets de développement web et je dois dire que son expertise technique et sa créativité ont été des atouts majeurs"
      },
      {
        id: 2,
        name: "Gabin",
        content: "Travailler avec Axel a été une expérience exceptionnelle. Sa maîtrise des langages de programmation et sa capacité à résoudre les problèmes complexes sont remarquables"
      }
    ]);
  
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
  
    const addTestimonial = () => {
      if (newTestimonial.name === "" || newTestimonial.content === "") {
        alert("remplir les champs vide svp");
        return;
      }
  
      const testimonial = {
        id: testimonials.length + 1,
        ...newTestimonial
      };
  
      setTestimonials([...testimonials, testimonial]);
      setNewTestimonial({ name: "", content: "" });
    };
  
    const deleteTestimonial = (id) => {
      const updatedTestimonials = testimonials.filter((testimonial) => testimonial.id !== id);
      setTestimonials(updatedTestimonials);
    };
  
    const editTestimonial = (id) => {
      setEditingTestimonialId(id);
      const testimonial = testimonials.find((t) => t.id === id);
      setNewTestimonial({ name: testimonial.name, content: testimonial.content });
    };
  
    const updateTestimonial = () => {
      if (newTestimonial.name === "" || newTestimonial.content === "") {
        alert("Please fill in all fields before updating the testimonial.");
        return;
      }
  
      const updatedTestimonials = testimonials.map((testimonial) =>
        testimonial.id === editingTestimonialId ? { ...testimonial, ...newTestimonial } : testimonial
      );
      setTestimonials(updatedTestimonials);
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
                      <button className="btn btn-danger mx-1" onClick={() => deleteTestimonial(testimonial.id)}>Delete</button>
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
                  <button type="button" className="btn btn-primary" onClick={updateTestimonial}>Update</button>
                ) : (
                  <button type="button" className="btn btn-primary" onClick={addTestimonial}>Add</button>
                )}
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Testimonial;
  