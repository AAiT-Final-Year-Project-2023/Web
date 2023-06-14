import { Role } from './constants';

export type ImageLabel = {
    id: number;
    tag: string;
    x: number;
    y: number;
    width: number;
    height: number;
    visible: boolean;
    color: string;
};

export type AudioLabel = {
    id: number;
    startTime: number;
    endTime: number;
    tag: string;
};

export interface Me {
    id: string;
    username: string;
    email: string;
    roles: Role[];
    image: string;
    current_balance: number;
    total_earnings: number;
    email_is_valid: boolean;
    google_authenticated: boolean;
    recently_viewed: any[];
    created_at: Date;
    updated_at: Date;
    bank_information: BankInformation;
}

export interface BankInformation {
    id: string;
    account_name: string;
    account_number: string;
    bank_id: string;
    created_at: Date;
    updated_at: Date;
}


export interface FileExtension {
    id: string;
    data_type: string;
    extension: string;
}

export interface Contribution {
    id: string;
    user: any;
    request_post: RequestPost;
    data: any;
    status: string;
    earning: number;
    created_at: string;
    updated_at: string;
}


// ===================================================== REQUEST POST =====================================================
export interface RequestPostResult {
    results: RequestPost[];
    total:   number;
}

export interface RequestPost {
    id: string;
    title: string;
    description: string;
    labels: string[];
    guidelines: string;
    datatype: string;
    extensions: string[];
    data_size: number;
    payment: string;
    deadline: Date;
    access: string;
    closed: boolean;
    created_at: Date;
    updated_at: Date;
    user: RequestPostUser;
    payment_plan: RequestPostPaymentPlan;
    upvoted_by: UpvotedDownvotedUser[];
    downvoted_by: UpvotedDownvotedUser[];
}

interface UpvotedDownvotedUser {
    id: string;
}

export interface RequestPostPaymentPlan {
    id: string;
    title: string;
    disk_size: string;
}

export interface RequestPostUser {
    id: string;
    username: string;
    email: string;
    image: string;
}
// ==============================================================================================================================


// ===================================================== DATASET =====================================================
export interface DatasetResult {
    results: Dataset[];
    total:   number;
}

export interface Dataset{
    id:           string;
    title:        string;
    description:  string;
    src:          string;
    size:         number;
    labels:       string[];
    status:       string;
    datatype:     string;
    price:        string;
    created_at:   Date;
    updated_at:   Date;
    user:         DatasetUser;
    payment_plan: DatasetPaymentPlan;
    upvoted_by:   DatasetUpvotedBy[];
    downvoted_by: DatasetDownvotedBy[];
    purchased_by: DatasetPurchasedBy[];
}

export interface DatasetUpvotedBy{
    id: string;
}
export interface DatasetDownvotedBy {
    id: string;
}

export interface DatasetPaymentPlan {
    id:        string;
    title:     string;
    disk_size: string;
}

export interface DatasetPurchasedBy {
    id:       string;
    username: string;
}

export interface DatasetUser {
    id:       string;
    username: string;
    email:    string;
    image:    string;
}
// ==============================================================================================================================