from django.shortcuts import render
#from django.http import Httpresponse

# Create your views here.
def index(request):
    return render(request,'main/index.html')  # 템플릿 메인 속 index를 불러온다.
  
 
def doc_detail(request, doc):
    path_template = 'main/'
    if doc == 'ceo_message':
        path_template += 'ceo_message.html'
    elif doc == 'index':
        path_template += 'index.html'
    elif doc == 'corporate_overview':
        path_template += 'corporate_overview.html'
    elif doc == 'ci':
        path_template += 'ci.html'
    elif doc == 'ideology_vision':
        path_template += 'ideology_vision.html'
    elif doc == 'business_introduction':
        path_template += 'business_introduction.html'
    elif doc == 'jas_network':
        path_template += 'jas_network.html'
    elif doc == 'passenger':
        path_template += 'passenger.html'
    elif doc == 'ramp':
        path_template += 'ramp.html'
    elif doc == 'gse':
        path_template += 'gse.html'
    elif doc == 'fuel':
        path_template += 'fuel.html'
    elif doc == 'personnel_system':
        path_template += 'personnel_system.html'
    elif doc == 'incruit_anc':
        path_template += 'incruit_anc.html'
    elif doc == 'careers_info':
        path_template += 'careers_info.html'
    elif doc == 'hire_benefit':
        path_template += 'hire_benefit.html'
    elif doc == 'faq':
        path_template += 'faq.html'
    elif doc == 'safety_ramp':
        path_template += 'safety_ramp.html'
    elif doc == 'safety_test':
        path_template += 'safety_test.html'
    elif doc == 'jascon':
        path_template += 'jascon.html'
    elif doc == 'co_map':
        path_template += 'co_map.html'
    else:
        path_template += 'error.html'
    return render(request, path_template)
