import json
from rest_framework.decorators import api_view
from django.http import HttpResponse




@api_view()
def getstudents(request):
   list= [
  {
    "id": 1,
    "quote": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    "author": "کاربر 1000",
    "authorThumb": "testimonial/h-2-t-01.png",
    "designation": "مدیر فنی فیسبوک"
  },
  {
    "id": 2,
    "quote": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    "author": "کاربر 2000",
    "authorThumb": "testimonial/h-2-t-02.png",
    "designation": "موسس علی بابا"
  },
  {
    "id": 3,
    "quote": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    "author": "کاربر 3",
    "authorThumb": "testimonial/h-2-t-03.png",
    "designation": "مدیر اجرایی دیجی کالا"
  }
]






   return HttpResponse(json.dumps(list,default=lambda o:o.__dict__),content_type="application/json")
