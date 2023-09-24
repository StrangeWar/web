from app import app, db, User

with app.app_context():
    all_users = User.query.all()
    for user in all_users:
        print(user.username, user.email, user.password)

# with app.app_context():
#     user_to_delete = User.query.get(1)
#     if user_to_delete:
#         try:
#             db.session.delete(user_to_delete)
#             db.session.commit()
#             print("Item deleted successfully.")
#         except Exception as e:
#             print(f"Error deleting item: {str(e)}")
#     else:
#         print("Item not found.")