class User < ApplicationRecord
    # enumeration for the status 
    enum status: { pending: 0, reviewing: 1, approved: 2 }

end
