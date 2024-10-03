using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace ReactAppEmployees.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
      

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

      
        [HttpGet]
        public List<Employee> Get()
        {
            List<Employee> empList = new List<Employee>
            {
                new Employee{Id=101,Name="Abhinav",Location="Bangalore",Salary=12345},

                new Employee{Id=102,Name="Abhishek",Location="Chennai",Salary=23456},

                new Employee{Id=103,Name="Akshay",Location="Bangalore",Salary=34567},

                new Employee{Id=104,Name="Akash",Location="Chennai",Salary=45678},

                new Employee{Id=105,Name="Anil",Location="Bangalore",Salary=56789}
            };
            return empList;
        }

        [HttpPost]
        public bool Post(Employee employee)
        {
            SqlConnection conn = new SqlConnection(@"server=(localdb)\MSSQLLocalDB;database=Employees;integrated security=true");
            string query = "insert into EmployeeInfo values(@Id,@Name,@Loc,@Sal)";
            SqlCommand cmd = new SqlCommand(query, conn);
            cmd.Parameters.Add(new SqlParameter("@Id", employee.Id));
            cmd.Parameters.Add(new SqlParameter("@Name", employee.Name));
            cmd.Parameters.Add(new SqlParameter("@Loc", employee.Location));
            cmd.Parameters.Add(new SqlParameter("@Sal", employee.Salary));
            conn.Open();
            int noOfRowsAffected = cmd.ExecuteNonQuery();
            conn.Close();
            return noOfRowsAffected > 0 ? true : false;
        }
    }
}
