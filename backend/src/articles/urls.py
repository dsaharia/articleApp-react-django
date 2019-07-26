from django.urls import path, include
from articles.views import ArticleViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ArticleViewSet, basename='articles')
urlpatterns = router.urls


# from .views import ArticleListView, ArticleDetailView, ArticleDetailView

# urlpatterns = [
#     path('', ArticleListView.as_view()),
#     path('create/', ArticleDetailView.as_view()),
#     path('<pk>', ArticleDetailView.as_view()),
# ]