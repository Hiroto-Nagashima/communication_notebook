class CommunicationNotebook < ApplicationRecord
  belongs_to :kid, optional: true
  validates  :bath, :bodyTemperature, :mood, :breakfast, :dinner, :memo, :date, presence: true
end
