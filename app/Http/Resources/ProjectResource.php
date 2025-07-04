<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ProjectResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $imageUrl = null;
        
        if ($this->image_path) {
            // Check if it's a full URL (external image)
            if (filter_var($this->image_path, FILTER_VALIDATE_URL)) {
                $imageUrl = $this->image_path;
            } else {
                // It's a local path
                $imageUrl = $this->image_path;
            }
        }
        
        // Debug: Log the final URL being sent to frontend
        \Log::info('Project ' . $this->id . ' - Final image_path sent to frontend: ' . $imageUrl);
        
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
            'due_date' => (new Carbon($this->due_date))->format('Y-m-d'),
            'status' => $this->status,
            'image_path' => $imageUrl,
            'createdBy' => new UserResource($this->createdBy),
            'updatedBy' => new UserResource($this->updatedBy),

        ];
    }
}
