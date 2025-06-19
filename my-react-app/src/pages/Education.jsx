import React from 'react';

function Education() {
  return (
    <section id="education" >
  <h3 className="text-center mb-4">Education</h3>
  <div className="row g-4">
    {/* Card 1 */}
    <div className="col-md-6">
      <div className="card h-100 w-100 p-3 shadow">
        <h5 className="text-start">2024</h5>
        <h6 className="text-start text-wrap" style={{ wordBreak: "break-word" }}>
          Bachelor of Computer and Information Sciences
        </h6>
        <p className="text-start mb-1">Software Development Major</p>
        <p className="text-start mb-1">Auckland University of Technology (AUT)</p>
        <p className="text-start">
          Design and develop secure software using modern programming languages,
          operating systems, networks, and databases.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-md-6">
      <div className="card h-100 w-100 p-3 shadow">
        <h5 className="text-start">2019</h5>
        <h6 className="text-start text-wrap" style={{ wordBreak: "break-word" }}>
          Certificate in Science and Technology
        </h6>
        <p className="text-start mb-1">Auckland University of Technology (AUT)</p>
        <p className="text-start">
          Introduction to engineering, computing, and mathematics to prepare for
          further study at the bachelor's level.
        </p>
      </div>
    </div>
  </div>
</section>

  );
}

export default Education;
