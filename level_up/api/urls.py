from django.urls import path
from .views import RoomViewList, RoomViewCreate

urlpatterns = [
    path('room/list', RoomViewList.as_view()),
    path('room/create', RoomViewCreate.as_view()),
]