from django.shortcuts import render

posts=[
    {
        'author':'Taranjeet Singh',
        'title':'Blog post 1',
        'content':'First blog post',
        'date_posted':'August 27, 2018'
    },
     {
        'author':'Ankit Singh',
        'title':'Blog post 2',
        'content':'First blog post',
        'date_posted':'August 27, 2018'
    },
]

def home(request):
    context={
        'posts':posts
    }
    
    return render(request, 'blog/home.htm',context)

def about(request):
    return render(request, 'blog/about.htm',{'name':'About'})