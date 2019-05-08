## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|


### Association
- has_many :messages
  has_many :users, through: :members
  has_many:members

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
|body|text|
|image|string|

### Association
- belongs_to :group
  belongs_to :user
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|add_index :users, :name|string|null: false|


### Association
- has_many :groups, through: :members
  has_many :messages
  has_many:members