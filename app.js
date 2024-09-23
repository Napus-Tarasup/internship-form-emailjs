// ฟังก์ชันตอบกลับอีเมลร่วม emailjs
function sendMail(event) {

  // ป้องกันการรีเฟรชหน้า
  event.preventDefault();

  // สร้างตัวแปรรับ-ส่งไปให้ emailjs
  var params = {
    email: document.getElementById("email").value,
    from_name: "กรอกสมัครฝึกงาน",
    to_name:
      document.getElementById("fname").value +
      " " +
      document.getElementById("lname").value,
    message: "เราได้รับข้อมูลของคุณแล้วครับ/ค่ะ",
  };

  emailjs
    // server, template, data
    .send("service_ihpwiin", "template_z9xlnyf", params)
    // ส่งสำเร็จ
    .then(function (res) {
      alert("ส่งแบบฟอร์มสมัครฝึกงานเรียบร้อยครับ/ค่ะ" + res.status);
    })
    // ส่งไปสำเร็จ
    .catch(function () {
      console.error("เกิดข้อผิดพลาด: ", error);
      alert("การส่งแบบฟอร์มไม่สำเร็จครับ/ค่ะ");
    });
}

// รอเหตุการณ์ submit เพื่อใช้ sendMail
document.getElementById("webForm").addEventListener("submit", sendMail);
