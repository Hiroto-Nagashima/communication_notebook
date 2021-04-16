class CommunicationNotebook < ApplicationRecord
  belongs_to :kid
  validates :bodyTemperature, :hasBathed, :mood, :breakfast, :dinner, :memo, presence: true
end
