const Projects = () => (
    <section id="projects" className="p-8 bg-white">
      <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
      <div className="flex flex-col md:flex-row space-x-4">
  <div className="mt-4 flex-1">
    <h3 className="font-semibold text-lg text-black">Queue Management System</h3>
    <p className="text-gray-600">
      The Queue Management System (QMS) is a comprehensive solution developed to streamline and manage the logistics of university convocations. This system provides a structured way to handle CRUD operations for key entities, including students, cities, provinces, convocations, and staff. With an emphasis on efficiency, the QMS allows university staff to assign students to specific convocations and allocate staff members accordingly. The system issues tokens to students, ensuring a smooth and orderly process for attendance and registration.

      In addition, QMS generates personalized invitation cards for students, staff, and designated guests, allowing for seamless entry and tracking. Each invitation card can include essential details such as the student's token number, assigned convocation, and guest permissions, enhancing the overall user experience. This system not only optimizes the event organization process but also provides a secure and reliable way for students and staff to participate in convocations.

      The Queue Management System is user-friendly, with intuitive interfaces that support university operations by handling data with accuracy and reducing administrative workload during large-scale events.
    </p>
  </div>

  <div className="mt-4 flex-1">
    <h3 className="font-semibold text-lg text-black">Library Management System</h3>
    <p className="text-gray-600">
      TThe Library Management System (LMS) is a robust solution designed to streamline the operations of any library, providing complete control over book inventories, staff, users, and campus data. The system offers comprehensive CRUD functionality for managing key entities such as staff, users, books, and campus locations, allowing library administrators to efficiently organize and update records.

A key feature of the LMS is its real-time inventory tracking, which displays the availability status of all books, indicating which titles are available and which are currently checked out. It also provides detailed information on each borrowed book, including who has borrowed it and the duration of the loan, ensuring that users and staff can track due dates and manage renewals effectively.

This system is designed to be user-friendly and adaptable for libraries of all sizes, enhancing operational efficiency and providing a clear, organized view of library resources. The LMS helps reduce manual work, improves resource management, and makes it easy for libraries to monitor and control their collections and borrowing activities.







    </p>
  </div>
</div>
    </section>
  );
  
  export default Projects