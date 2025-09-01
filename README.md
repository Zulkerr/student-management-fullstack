# 🎓 Studentenverwaltungssystem – Full-Stack Webanwendung

Eine moderne Full-Stack-Webanwendung mit **Django REST Framework** (Backend) und **React** (Frontend) zur Verwaltung von Studentendaten.  
Dieses Projekt demonstriert die Entwicklung von RESTful APIs, die Integration von Frontend & Backend sowie moderne Best Practices der Webentwicklung.

## 🚀 Funktionen

- **Vollständige CRUD-Operationen** – Erstellen, Anzeigen, Bearbeiten, Löschen von Studentendaten  
- **RESTful API** – Sauber strukturierte API-Endpunkte nach REST-Prinzipien  
- **Modernes React-Frontend** – Responsives UI mit Echtzeit-Daten  
- **JSON-Datenverarbeitung** – Nahtlose Serialisierung und Kommunikation  
- **CORS-Konfiguration** – Sichere Cross-Origin-Anfragen  
- **Responsive Design** – Funktioniert auf Desktop & Mobilgeräten  

## 🛠️ Technologiestack

### Backend
- **Django 5.x** – Python-Webframework  
- **Django REST Framework** – Leistungsstarkes Toolkit für APIs  
- **SQLite** – Entwicklungsdatenbank  
- **Python 3.13.x** – Programmiersprache  

### Frontend
- **React 18.x** – Moderne JavaScript-Bibliothek  
- **Axios** – HTTP-Client für API-Anfragen  
- **CSS3** – Styling & Responsive Design  
- **JavaScript (ES6+)** – Moderne Sprachfeatures  

## 🏗️ Projektarchitektur
student-api-project/
├── backend/ # Django REST API  
│ ├── student_api/ # Hauptprojekt  
│ ├── students/ # Studenten-App  
│ │ ├── models.py # Datenmodell  
│ │ ├── serializers.py # JSON-Serializer  
│ │ ├── views.py # API-Views  
│ │ └── urls.py # Endpunkte  
│ └── manage.py # Django-Verwaltung  
├── frontend/ # React-Anwendung  
│ ├── src/  
│ │ ├── App.js # Haupt-React-Komponente  
│ │ └── App.css # Styles  
│ └── package.json # Abhängigkeiten  
└── backend_env/ # Virtuelle Python-Umgebung  

---

## 🔌 API-Endpunkte

| Methode  | Endpunkt              | Beschreibung          |
|----------|-----------------------|-----------------------|
| `GET`    | `/api/students/`      | Alle Studenten abrufen |
| `POST`   | `/api/students/`      | Neuen Studenten anlegen |
| `GET`    | `/api/students/{id}/` | Spezifischen Studenten abrufen |
| `PUT`    | `/api/students/{id}/` | Studenten aktualisieren |
| `DELETE` | `/api/students/{id}/` | Studenten löschen |

---

## 📊 Datenmodell

```javascript
{
  "id": 1,
  "name": "Max Mustermann",
  "email": "max@uni.de", 
  "age": 22,
  "course": "Informatik",
  "created_at": "2025-09-01T10:30:00Z"
}

---

 Voraussetzungen

Python 3.8+ installiert
Node.js 14+ installiert
Git installiert

## Backend einrichten
# Repository klonen
git clone https://github.com/your-username/student-management-fullstack.git
cd student-management-fullstack

# Virtuelle Umgebung erstellen
python -m venv backend_env
backend_env\Scripts\activate  # Windows
# source backend_env/bin/activate  # macOS/Linux

# Abhängigkeiten installieren
cd backend
pip install django djangorestframework django-cors-headers

# Migrationen durchführen
python manage.py makemigrations
python manage.py migrate

# Django-Server starten
python manage.py runserver

##Frontend einrichten
# Neues Terminal öffnen
cd frontend

# Abhängigkeiten installieren
npm install

# React-Entwicklungsserver starten
npm start

## Wichtige Lernkonzepte
RESTful API Design – Vorhersehbares API-Verhalten

Frontend-Backend-Trennung – Entkoppelte Architektur

JSON-Serialisierung – Python-Objekte ↔ JSON

CORS Handling – Sichere Cross-Origin-Anfragen

State Management – React Hooks für dynamische UIs

HTTP-Methoden – GET, POST, PUT, DELETE

## Zukünftige Erweiterungen
 Benutzer-Authentifizierung & Autorisierung

 Erweiterte Filter & Suchfunktionen

 Pagination für große Datenmengen

 Datei-Upload für Studentenfotos

 Export nach PDF/Excel

 Dashboard mit Statistiken

 Mobile-Optimierungen

 Unit- & Integrationstests

##Beiträge

Beiträge sind willkommen!
Bitte Pull Requests einreichen.
Bei größeren Änderungen zuerst ein Issue eröffnen.

📝 Lizenz

Dieses Projekt ist Open Source unter der MIT-Lizenz.

👨‍💻 Entwickler

Zulker – Full-Stack-Entwickler

Portfolio: github.com/Zulkerr
E-Mail: nael.zulkar@gmail.com

🙏 Danksagung

Django-Dokumentation für großartige API-Guides

React-Team für das Frontend-Framework

Django REST Framework für die starken API-Tools
