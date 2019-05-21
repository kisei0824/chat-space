FactoryBot.define do
    factory :message do
      content {Faker::Lorem.sentence}
      image {File.open("#{Rails.root}/public/images/41-e1451398195109.jpg")}
      user
      group
    end
  end