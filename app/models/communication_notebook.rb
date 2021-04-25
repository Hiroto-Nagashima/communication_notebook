class CommunicationNotebook < ApplicationRecord
  belongs_to :kid, optional: true
  validates  :bath,:bodyTemperature, :mood, :breakfast, :dinner, :memo, presence: true
end
