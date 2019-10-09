from django.views.generic import TemplateView
from django.http import JsonResponse
from time import sleep

home = TemplateView.as_view(template_name="home.html")

STUDENT_NAMES = [
    "Devin Booker",
    "Patton Burge",
    "Gillian Floyd",
    "Cameron Fortner",
    "JD Gault",
    "Christian Guzman",
    "Oscar Guzman",
    "Tyler Irving",
    "Kalissa Kihei",
    "Destiny Malone",
    "Dylan Melton",
    "Hunter Moses",
    "Jaylan Murphy",
    "Dakota Nichols",
    "Tyler-Rex Rowlett",
    "Derek Stegall",
    "Angie Unda",
    "William Warren",
    "Marcus Whitmore",
    "Cole Anderson",
    "Timothy Bowling",
    "Logan Harrell",
    "Ginger Keys",
    "Matt Lipsey",
    "Myeisha Madkins",
    "Henry Moore",
    "John Morgan",
    "Danny Peterson",
    "Ray Turner",
    "Cody van der Poel",
    "Alexandra Fortner",
    "Edgar Guzman",
    "Jo'Tavious Smith",
    "Jose Vargas",
    "Lizeth Buenrostro",
    "Osvaldo Quinonez",
    "Shedlia Freeman",
    "Trey Shelton",
    "Valente Alvarez",
    "Adam Tutor",
    "Addey Welch",
    "Dustin Buice",
    "Eddrick Butler",
    "Jacob Spence",
    "James Hakim",
    "James Sibert",
    "Keegan Faustin",
    "Martin Guzman",
    "Milttreonna Owens",
    "Nicole Shelton",
    "Ricky Keisling",
]


def api_students(request):
    limit = max(min(int(request.GET.get("limit", 10)), 10), 0)
    offset = max(int(request.GET.get("offset", 0)), 0)
    sleep(1.5)
    return JsonResponse({"students": STUDENT_NAMES[offset : offset + limit]})
